import { useSelector } from "react-redux";

const Hero = () => {
  const pokemonName = useSelector((state) => state.main.pokemon);
  const heroName = useSelector((state) => state.hero.superHero);

  console.log("pokemonName", pokemonName);
  console.log("heroName", heroName);

  return (
    <>
      <p>Hero COMPONENT</p>
      <div>pokemonName: {pokemonName}</div>
      <div>superHero: {heroName}</div>
    </>
  );
};

export default Hero;
