function catAndMouse(catA, catB, mouse) {
    var distanceCatAMouse = Math.abs(catA - mouse);
    var distanceCatBMouse = Math.abs(catB - mouse);
    
    if (distanceCatAMouse == distanceCatBMouse) {
        // console.log('Mouse C');
        return 'Mouse C'
    } if (distanceCatAMouse < distanceCatBMouse) {
        // console.log('Cat A');
        return 'Cat A'
    } if (distanceCatBMouse < distanceCatAMouse) {
        // console.log('Cat B');
        return 'Cat B'
    };
}