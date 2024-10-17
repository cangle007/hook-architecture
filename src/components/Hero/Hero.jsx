import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useUsersData from '../../redux/hooks/useDataProcess';

const Hero = () => {
  const { getUsersDataProcess, getHeroProcess } = useUsersData();

  const pokemonName = useSelector((state) => state.main.pokemon);
  const userNames = useSelector((state) => state.main.users);
  const heroName = useSelector((state) => state.hero.superHero);

  useEffect(() => {
    getUsersDataProcess();
    getHeroProcess();
  }, []);

  return (
    <>
      <p>This is Hero component</p>
      <div>pokemonName: {pokemonName}</div>
      <div>superHero: {heroName}</div>
      <div>
        {userNames.map((obj) => {
          return <div>{obj.name + ' - ' + obj.age}</div>;
        })}
      </div>
    </>
  );
};

export default Hero;
