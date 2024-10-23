import React from 'react';
import './Guide.css';

const Guide = () => {
  return (
    <div className="guide-container">
      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search the guide..." />
      </div>

      {/* Main Layout */}
      <div className="layout">
        {/* Table of Contents */}
        <div className="toc">
          <h3>Table of Contents</h3>
          <ul>
            <li>1. Introduction to Agriculture
            </li>
            <li>2. Soil Management
            </li>
            <li>3. Crop Science
            </li>
          </ul>
        </div>

        {/* Content Area */}
        <div className="content">
          <h2>1. Introduction </h2>
          <p className="subtitle">Understanding the foundation of agriculture</p>
          <p>Agriculture is the practice of cultivating soil, growing crops, and raising animals for food, fiber, and other essential products. It is one of the oldest human activities, beginning over 10,000 years ago, and remains the backbone of civilization today.</p>

          <h3>Overview:</h3>
          <ul>
            <li><strong>Definition</strong>: Agriculture includes farming (cultivating the land), animal husbandry (raising livestock), and horticulture (growing fruits, vegetables, and flowers).</li>
            <li><strong>Historical Evolution</strong>: From the early domestication of plants and animals, agriculture has evolved through various stages, from subsistence farming to large-scale commercial agriculture. Modern agriculture incorporates scientific advancements like biotechnology, mechanization, and sustainable farming practices.</li>
            <li><strong>Methods</strong>:Agriculture encompasses traditional farming techniques, organic farming, and modern practices such as precision farming, which uses technology to optimize crop growth and soil health.</li>
          </ul>

          <h3>Importance:</h3>
          <ul>
            <li><strong>Food Security</strong>: It provides a stable supply of food for human consumption, including grains, vegetables, fruits, and animal products</li>
            <li><strong>Economic Backbone</strong>: Agriculture contributes to economic growth, particularly in developing countries, by providing jobs and raw materials for industries like textiles, pharmaceuticals, and biofuels.</li>
            <li><strong>Environmental Stewardship</strong>: Sustainable farming practices can improve biodiversity, conserve water, and maintain healthy ecosystems. With proper management, agriculture can also help combat climate change by reducing carbon footprints and maintaining soil health.</li>
            <li><strong>Rural Development</strong>: Agriculture is key to the development of rural areas, creating employment opportunities, supporting local economies, and fostering community growth.</li>
          </ul>



          <h2>2.Soil Management </h2>
          <p className="subtitle">Understanding the foundation of agriculture</p>
          <p>This section will explore Soil Types and Soil Testing, both of which are crucial for sustainable crop production.
</p>

          <h3>Soil Types: </h3>
          <ul>
            <li><strong>Sandy Soil</strong>:Characterized by large particles and good drainage, but poor nutrient retention. It is often used for crops that don’t require much water, like peanuts or root vegetables.</li>
            <li><strong>Clay Soil</strong>: Made of fine particles, clay soil retains water well but drains poorly. It is nutrient-rich but can be difficult to work with, particularly when wet. Crops like rice and leafy vegetables grow well in clay soil.</li>
            <li><strong>Silt Soil</strong>:Composed of medium-sized particles, silt soil holds moisture and nutrients better than sandy soil but is easier to work with than clay. It is considered fertile and is ideal for crops like wheat, rice, and other grains.</li>
            <li><strong>Loam Soil</strong>:A mixture of sand, silt, and clay, loam is considered the best soil type for most crops. It has good nutrient levels and water retention while allowing adequate drainage. Loam is suitable for a wide range of crops, including vegetables, fruits, and cereals.</li>
          </ul>

          <h3>Soil Testing:</h3>
          <p>Soil testing is a crucial part of soil management, helping farmers understand the nutrient content, pH level, and overall fertility of their land. This information allows for informed decisions on crop selection and fertilization.
</p>
          <ul>
            <li><strong>Nutrient Analysis</strong>: Identifies the levels of essential nutrients such as nitrogen (N), phosphorus (P), and potassium (K), which are critical for plant growth.</li>
            <li><strong>pH Testing</strong>: Measures the acidity or alkalinity of the soil. Most crops grow best in neutral to slightly acidic soils (pH 6.0-7.0), but some, like blueberries, thrive in more acidic conditions.</li>
            <li><strong>Soil Texture</strong>:Soil testing helps determine the percentage of sand, silt, and clay present in the soil. Understanding soil texture is essential for water retention, root growth, and nutrient uptake.</li>
            <li><strong>Organic Matter Content</strong>: Testing reveals the amount of decomposed plant and animal material in the soil. High organic matter improves soil structure, fertility, and moisture retention.</li>
          </ul>
          


          <h2>3.Crop Science </h2>
          <p className="subtitle">Understanding the foundation of agriculture</p>
          <p>The Crop Types and Growth Techniques sections will offer detailed insights into the science behind crop cultivation and how to improve productivity.</p>

          <h3>Crop Types:</h3>
          <p>Different crops serve different purposes in agriculture. Understanding the types of crops helps farmers plan rotations, manage soil health, and meet market demands.</p>

          <ul>
            <li><strong>Cereals</strong>: These are grain-producing crops like wheat, rice, corn, barley, and oats. Cereals are staple foods and provide a large portion of the world’s calories.</li>
            <li><strong>Legumes</strong>: These crops, such as beans, peas, lentils, and soybeans, are important for their high protein content and their ability to fix nitrogen in the soil, reducing the need for fertilizers.</li>
            <li><strong>Fruits and Vegetables</strong>:These are grown for direct human consumption and include a wide range of plants like tomatoes, cucumbers, apples, and bananas. They are rich in vitamins, minerals, and fiber.</li>
            <li><strong>Oil Seeds</strong>:Crops such as sunflower, canola, and soybeans are grown for their oil content, which is used in cooking, manufacturing, and biofuels.</li>
            <li><strong>Cash Crops</strong>:These crops, like cotton, tobacco, and coffee, are grown primarily for sale rather than consumption by the grower. They are often exported and can provide significant economic value.</li>

          </ul>

          <h3>Growth Techniques:</h3>
          <p>Crop growth techniques involve understanding plant biology, selecting appropriate varieties, and using modern farming methods to increase yield and quality.</p>
          <ul>
            <li><strong>Plant Breeding and Biotechnology</strong>: Advances in crop breeding have led to the development of high-yield, disease-resistant, and climate-resilient varieties. Genetic engineering can improve crop traits like drought tolerance and pest resistance.</li>
            <li><strong>Crop Rotation</strong>: Alternating different types of crops in the same field from season to season helps maintain soil fertility, reduce pest and disease buildup, and improve yields. For example, planting legumes after a cereal crop can restore nitrogen to the soil.</li>
            <li><strong>Intercropping</strong>: Growing two or more crops together in the same field can enhance biodiversity, improve soil health, and optimize the use of water and nutrients.</li>
            <li><strong>Irrigation Techniques</strong>: IPM is an environmentally friendly approach to pest control that combines biological, cultural, and chemical methods to manage pest populations. This approach minimizes the use of pesticides and focuses on long-term pest control.</li>
            <li><strong>Fertilization Strategies</strong>:Proper fertilization ensures that crops get the necessary nutrients for growth. Organic fertilizers improve soil structure and biodiversity, while synthetic fertilizers provide concentrated nutrients but should be used cautiously to avoid soil degradation.</li>
          
          </ul>

        </div>
      </div>
    </div>
  );
};

export default Guide;
