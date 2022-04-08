import SwitchButton from "./components/Button/Button";

const ThemePage = () => {
    return (
        <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
        <SwitchButton />
        <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>
          {darkMode ? "It's a dark theme!" : "It's a light theme!"}
        </h1>
  
        <p className={`para ${darkMode ? "para-dark" : "para-light"}`}>
          Cupcake ipsum dolor sit amet. Oat cake sweet roll soufflé cookie pudding
          dessert chocolate. Lemon drops cotton candy sugar plum tootsie roll cake
          bear claw chupa chups jujubes. Cupcake ice cream wafer lemon drops wafer
          chocolate cake marshmallow dragée. Croissant liquorice candy canes wafer
          oat cake carrot cake oat cake fruitcake. Cake pudding jelly macaroon
          shortbread. Bear claw icing dessert marshmallow caramels gummies. Bonbon
          gummies soufflé toffee lemon drops apple pie tiramisu. Jelly jelly wafer
          pudding bonbon. Caramels fruitcake lollipop tiramisu sweet roll. Topping
          cookie chocolate lollipop marshmallow cupcake liquorice sugar plum
          croissant. Jelly-o bonbon icing candy dragée. Jelly beans cupcake
          tootsie roll cotton candy shortbread danish wafer lollipop cake. Jelly-o
          halvah tootsie roll muffin wafer cake fruitcake. Muffin toffee jelly
          tootsie roll powder. Croissant cupcake pastry jelly lollipop oat cake.
          Lollipop lollipop oat cake cotton candy powder halvah. Powder marzipan
          cake soufflé cake topping croissant cookie apple pie. Oat cake chocolate
          cake chocolate chocolate cake donut gingerbread oat cake cupcake
          gummies. Brownie caramels chocolate macaroon sesame snaps caramels
          tiramisu danish. Macaroon danish gingerbread jelly-o soufflé chocolate
          candy canes pie sugar plum. Marzipan bonbon jelly pudding gingerbread
          chocolate bar cupcake marshmallow jujubes.
        </p>
      </div>
    );
}

export default ThemePage;