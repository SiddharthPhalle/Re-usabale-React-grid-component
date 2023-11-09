import React, { useState } from "react";
import "./CustomComp.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.cnt}, ${props => 100/props.cnt}%);
  width: 75%;
  height: 50%;
  .cell {
    text-align: center;
  }
`;

const CustomComp = (props) => {
  const { headers, data, filterOn, selectedOption, setSelectedOption, includeAll } = props;
  console.log(headers);
  const [products, setProducts] = useState(data);
  const options = data.map((prod) => prod[filterOn]);
 const handleSelectChange = (e) => {
    const selectedVal = e.target.value
    setSelectedOption(selectedVal);
    const filteredData = data.filter((prod) => {
        if(selectedVal === "All") return prod.productName;
      return prod.productName === selectedVal ? prod.productName : "";
    });
    setProducts(filteredData);
  };
  return (
    <div className="container">
      <div className="dropdown-container">
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="">Select an option</option>
          {includeAll&&<option value="All">All</option>}
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div className="selected-option">Selected Option: {selectedOption ? selectedOption : "All"} </div>
      </div>
      <StyledDiv className="table-container" cnt = {headers.length}>
        {headers.map((title) => {
          return (
            <div key={title} className="table-header cell">
              {title}
            </div>
          );
        })}
        {products.map((product) => {
          return Object.keys(product).map((key) => {
            if (key === "id") return;
            return <div className="cell">{product[key]}</div>;
          });
        })}
      </StyledDiv>
    </div>
  );
};

export default CustomComp;
