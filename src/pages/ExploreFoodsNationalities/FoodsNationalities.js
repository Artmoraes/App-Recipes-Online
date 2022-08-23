import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Cards from '../../Components/Cards';
import Header from '../../Components/Header';
import MenuInferior from '../../Components/MenuInferior';
import NationalitiesDropDown from '../../Components/NationalitiesDropDown';
import AppContext from '../../context/AppContext';

export default function FoodsNationalities() {
  const { initialFetchs: { foods } } = useContext(AppContext);
  const magicNumber = 12;
  const initialFoods = foods.filter((_i, index) => index < magicNumber);

  return (
    <div>
      <Header
        title="Explore Nationalities"
        searchButton
      />
      <NationalitiesDropDown
        type="foods"
      />
      {initialFoods.map((item, index) => (
        <Link
          key={ index }
          to={ `/foods/${item.idMeal}` }
        >
          <Cards
            image={ item.strMealThumb }
            index={ index }
            name={ item.strMeal }
          />
        </Link>
      ))}
      <MenuInferior />
    </div>
  );
}
