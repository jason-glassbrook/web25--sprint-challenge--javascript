/***************************************
  TOOLS
***************************************/

function heading (content , before = 1, after = 1) {
  console.log (
    `${"\n".repeat (before)}### ${content} ###${"\n".repeat (after)}`
  );
}

/**************************************/

heading ("CLASSES");

/***************************************
  Task 1
  ------------------------------------
  Copy and paste your prototype in here and refactor into class syntax.
***************************************/

heading ("-> CUBOID MAKER");

class CuboidMaker
{
  constructor (attrs)
  {
    this.length = attrs.length;
    this.width  = attrs.width;
    this.height = attrs.height;
  }
  volume ()
  {
    return (this.length * this.width * this.height);
  }
  surfaceArea ()
  {
    return (
      2 * (
        (this.length * this.width)
      + (this.length * this.height)
      + (this.width  * this.height)
      )
    );
  }
}

/*******************
  testing
*******************/

const cuboid = new CuboidMaker ({
  length : 4,
  width  : 5,
  height : 5
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log (cuboid);
// >>> CuboidMaker {...}
console.log (cuboid.volume ());
// >>> 100
console.log (cuboid.surfaceArea ());
// >>> 130

/***************************************
  Stretch
  ------------------------------------
  Extend the base class CuboidMaker with a sub class called CubeMaker. 
  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker. 
  Test your work by logging out your volume and surface area.
***************************************/

heading ("-> CUBE MAKER");

class CubeMaker extends CuboidMaker
{
  constructor (attrs) {
    super ({
      length : attrs.length,
      width  : attrs.length,
      height : attrs.length
    });
  }
  /*
    I really shouldn't need to replace `volume()` and `surfaceArea()` because those formulas work for cubes (which are a specific subclass of cuboids)...
    But for the sake of following the instructions, I'll do it.
  */
  volume () {
    return (Math.pow (this.length , 3));
  }
  surfaceArea () {
    return (6 * Math.pow (this.length , 2));
  }
}

/*******************
  testing
*******************/

const cube = new CubeMaker ({
  length : 4
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log (cube);
// >>> CubeMaker {...}
console.log (cube.volume ());
// >>> 64
console.log (cube.surfaceArea ());
// >>> 96
