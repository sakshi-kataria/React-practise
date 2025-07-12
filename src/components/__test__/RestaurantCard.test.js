import RestaurantCard,{withDiscountInfo}  from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';
it("should render restaurant card component with props data ",()=>{
    render(<RestaurantCard restData={MOCK_DATA}/>);
    const name= screen.getByText("Burger King");
    expect(name).toBeInTheDocument();
});

it("should render restaurant card component with promoted label ",()=>{
    const RestaurantCardDiscounted = withDiscountInfo(RestaurantCard);
    render(<RestaurantCardDiscounted restData={MOCK_DATA}/>);
    const name= screen.getByText("Burger King");
    expect(name).toBeInTheDocument();
});