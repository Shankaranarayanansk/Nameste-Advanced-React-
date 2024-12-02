
# Swiggy Clone

## Layout

- **Header**
  - Logo
  - Navigation Items
- **Body**
  - Search
  - RestaurantContainer
    - RestaurantCard
      - Image
      - Name of Restaurant
      - Star Rating
      - Cuisine
      - Delivery Time
- **Footer**
  - Copyright
  - Links
  - Address
  - Contact

---

## Props

- **Definition**: Props are arguments passed to components to make them dynamic.
- **Purpose**: Pass dynamic arguments to components.

### Ways to Use Props

1. **Directly Access Props**:
   ```jsx
   const Car = (props) => {
     return <h1>{props.resname}</h1>;
   };
   <Car resname="Megana Foods" />;
   ```

2. **Destructure Props Inline**:
   ```jsx
   const Car = ({ resname, cuisine }) => {
     return (
       <>
         <h1>{resname}</h1>
         <h2>{cuisine}</h2>
       </>
     );
   };
   <Car resname="KFC" cuisine="Burger" />;
   ```

3. **Destructure Props Inside the Function**:
   ```jsx
   const Car = (props) => {
     const { resname, cuisine } = props;
     return (
       <>
         <h1>{resname}</h1>
         <h2>{cuisine}</h2>
       </>
     );
   };
   <Car resname="Annaporna" cuisine="Puri" />;
   ```

---

## JSON Data

### Reason for Using JSON
- **Config-Driven UI**: Data changes dynamically based on location, and the UI adapts accordingly.

### Example Usage
Passing data as a string:
```jsx
<RestaurantCard resname="KFC" cuisine="Burger" />;
```

Passing data from a JavaScript object:
```jsx
<RestaurantCard resname={jsonObject.name} />;
```

Handling array data:
```jsx
<h4>{resdata.data.cuisines.join(", ")}</h4>
```

---

## Reading Props

1. **Destructure Required Data**:
   ```jsx
   const data = [
     {
       name: "Shankar",
       age: 21,
       skill: ["MERN", "Java"],
       place: "Chennai",
     },
   ];

   const Profile = ({ resdata }) => {
     const { name, age, skill, place } = resdata?.data || resdata || {};
     return (
       <div>
         <h1>My name is {name}</h1>
         <p>Age: {age}</p>
         <p>Skills: {skill?.join(", ")}</p>
         <p>Place: {place}</p>
       </div>
     );
   };

   const App = () => {
     return (
       <div>
         <Profile resdata={data[0]} />
       </div>
     );
   };

   export default App;
   ```

---

## Using Map

- Example:
  ```jsx
  {jsonname.map((item) => (
    <Component key={item.id} anyName={item} />
  ))}
  ```

- **Why Use Keys**:
  - React identifies changes better when keys are unique.
  - Using an `id` is the best practice, while using an `index` is acceptable but less optimal.
