const CategoryList = () => {
  const categories = [
    { name: "Fruits", items: ["Apple", "Banana", "Cherry"] },
    { name: "Vegetables", items: ["Carrot", "Lettuce", "Spinach"] },
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <div key={index}>
          <h2>{category.name}</h2>
          <ul>
            {category.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;