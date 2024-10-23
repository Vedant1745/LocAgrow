const port=process.env.PORT;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path= require("path");
const cors=require("cors");
const { type } = require("os");
const { log } = require("console");
require("dotenv").config();
const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require('@google/generative-ai');


app.use(express.json());
app.use(cors());

// Datbase Connection with MongoDb
mongoose.connect(process.env.MONGODB_URI);

// API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running");
})

// Image Storage Engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage})

//Creating Upload Endpoint for images
app.use('/images',express.static('upload/images'))

app.post("/upload", upload.single('product'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: 0, message: 'No file uploaded' });
    }
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

//Schema for creating products

const Product=mongoose.model("Product",{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})

app.post('/addproduct',async (req,res)=>{
    let products=await Product.find({});
    let id;
    if(products.length>0){
        let last_product_array = products.slice(-1);
        let last_product=last_product_array[0];
        id = last_product.id+1;
    }
    else{
        id=1;
    }
    const product=new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//Creating APIs for deleteing Products

app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({
        id:req.body.id
    });
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })
    
})

//Creating API for getting all products
app.get('/allproducts',async (req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})


// Schema Creating for user model

const Users=mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating Endpoint for registering the user
app.post('/signup',async (req,res)=>{
    let check=await Users.findOne({email:req.body.email})
    if(check){
        return res.status(400).json({success:false,error:"exitsting user found with same email address"});
    }
    let cart={};
    for (let i = 0; i < 300; i++) {
        cart[i]=0;
    }
    const user=new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })


    await user.save();

    const data={
        user:{
            id:user.id
        }
    }

    const token=jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//creating endpoint for user login
app.post('/login',async(req,res)=>{
    let user=await Users.findOne({email:req.body.email});
    if(user){
        const passCompare=req.body.password === user.password;
        if(passCompare){
            const data={
                user:{
                    id:user.id
                }
            }
            const token=jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,error:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,error:"User not found"});
    }
})

//creating endpoint for newcollection data

app.get('/newcollection',async(req,res)=>{
    let products=await Product.find({});
    let newcollection=products.slice(1).slice(-8);
    console.log("New Collection Fetched")
    res.send(newcollection);
})

//creating endpoint popular in buying
app.get('/popular',async(req,res)=>{
    let products=await Product.find({category:"vegies"});
    let popular=products.slice(0,4);
    console.log("Popular in buying fetched");
    res.send(popular);
})

//creating middleware to fetch user
const fetchUser=async(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try{
            const data=jwt.verify(token,'secret_ecom');
            req.user=data.user;
            next();
        }catch(error){
            res.status(401).send({errors:"Please authenticate using a valid token"});
        }
    }
}

//creating endpoint for adding products in cartdata
app.post('/addtocart',fetchUser,async(req,res)=>{
    console.log("Added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId]+=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})

// Creating endpoint to remove product from cartdata
app.post('/removefromcart', fetchUser, async (req, res) => {
    console.log("Removed", req.body.itemId);
    let userData = await Users.findOne({_id: req.user.id});
    if (userData.cartData[req.body.itemId] > 0) {
        userData.cartData[req.body.itemId] -= 1;
        await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});
        res.send("Removed");
    } else {
        res.status(400).send("No items to remove");
    }
});

// Creating API to get the cartdata
app.post('/getcart', fetchUser, async (req, res) => {
    console.log("GetCart");
    let userData = await Users.findOne({_id: req.user.id});
    res.json(userData.cartData);
});

//chatbot
const MODEL_NAME = "gemini-1.5-flash";
const API_KEY = process.env.API_KEY;

async function runChat(userInput) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.9,
    topK: 1,
    topP: 1,
    maxOutputTokens: 1000,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [
          {
            text: "you are a chatbot whose name is 'LocAgrow' which helps farmers to solve their agriculture related queries Deep Expertise: Beyond general agricultural knowledge, specialize in water resource management, climate change impacts, and sustainable farming practices. Familiarize yourself with specific challenges faced by farmers in different regions, such as drought, flood, salinity, and pests. Local Insights: Leverage your understanding of regional agricultural practices, traditional knowledge, and local varieties to provide culturally relevant and practical advice.Temporal Dynamics: Consider seasonal variations, historical trends, and long-term climate patterns when analyzing data and making recommendations. Data Analysis and Recommendations Holistic Approach: Combine EO data with other relevant sources, such as weather forecasts, soil data, and crop advisory services, to provide a comprehensive assessment of agricultural conditions.Risk Assessment: Identify potential risks and vulnerabilities, such as crop failures, water shortages, or disease outbreaks, based on data analysis. Offer preventative measures and contingency plans. Economic Considerations: Factor in economic factors, including input costs, market prices, and government policies, to provide recommendations that are both environmentally sustainable and financially viable. User-Centric Approach Personalized Recommendations: Tailor responses to individual farmers' needs, considering their specific crop types, farm size, and goals. Offer options that align with their preferences and constraints.Accessibility: Ensure that the chatbot's interface is user-friendly and accessible to farmers with varying levels of technical proficiency. Provide clear instructions and visual aids where necessary.Language and Cultural Sensitivity: Adapt the chatbot's language and tone to different cultural contexts. Respect local customs, traditions, and beliefs. Ethical and Responsible AI Bias Mitigation: Be aware of potential biases in the data and algorithms used. Strive to provide unbiased and equitable recommendations, avoiding perpetuating harmful stereotypes or discriminatory practices. Privacy and Data Security: Protect farmers' privacy by handling their data responsibly and securely. Adhere to relevant data protection regulations. Transparency: Be transparent about the limitations of the chatbot and the data sources used. Inform farmers about the potential uncertainties and risks associated with the recommendations. Continuous Improvement Feedback Loop: Actively seek feedback from farmers to identify areas for improvement. Use this feedback to refine the chatbot's responses, knowledge base, and recommendations. Adaptability: Stay updated with the latest research, technologies, and agricultural trends. Continuously learn and adapt to changing conditions and challenges faced by farmers. Collaboration: Collaborate with agricultural experts, researchers, and government agencies to enhance the chatbot's capabilities and ensure the accuracy and relevance of its information.",
          },
        ],
      },
    ],
  });

  const result = await chat.sendMessage(userInput);
  const response = result.response;
  return response.text();
}

app.post('/chat', async (req, res) => {
    try {
      const userInput = req.body?.userInput;
      console.log('Incoming /chat request:', userInput);
  
      if (!userInput) {
        return res.status(400).json({ error: 'Invalid request body' });
      }
  
      const response = await runChat(userInput);
      res.json({ response });
    } catch (error) {
      console.error('Error in chat endpoint:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

app.listen(port,(error)=>{
    if(!error){
        console.log("Server is running on port "+port);
    }
    else{
        console.log("Error : "+error);
    }
})