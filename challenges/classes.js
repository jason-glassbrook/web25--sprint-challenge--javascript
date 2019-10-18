/***************************************
  TOOLS
***************************************/

function heading (content , before = 1, after = 1) {
  console.log (
    `${"\n".repeat (before)}### ${content} ###${"\n".repeat (after)}`
  );
}

/***************************************
  Task 1
  ------------------------------------
  Copy and paste your prototype in here and refactor into class syntax.
***************************************/

heading ("CLASSES");

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
  Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
***************************************/