var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b){
    console.log("solving for rectangle with l = " + l +" and b = " + b);

    if(l<=0 || b<=0){
        console.log("Enter valid dimensions. l = "+ l + " and b = " + b);
    }
    else{
        console.log("area of rectangle is " + rect.area(l,b));
        console.log("perimeter of rectangle is " + rect.perimeter(l,b));
    }
};

solveRect(2,4);
solveRect(12,4);
solveRect(0,4);
solveRect(-1,4);