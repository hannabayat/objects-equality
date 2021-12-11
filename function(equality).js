function isEqual(object1,object2){

    if((Object.keys(object1).length) !== (Object.keys(object2).length)) {
        return false;
    }
    for (let key in object1) {
        if (typeof(object1[key])=="object"){
             if (JSON.stringify(object1[key]) !== JSON.stringify(object1[key]))
              return false;
        }
        else
        {
            if((object1[key]!==object2[key])) 
            return false;
        }
    }
    return true;

}

 const obj1 = {
     key0: false,
     key1: 'val1',
     key2: 50,
     key3: [0, 1, 2],
     key4: {name: 'amir'},
 }
 const obj2 = {
     key0: false,
     key1: 'val1',
     key2: 50,
     key3: [0, 1],
     key4: {name: 'amir'},
 }


 //console.log(isEqual(obj1,obj2));

                                     // -------------------comparison method (between two objcts)-------------------------------


function isEqualSimple(object1,object2) {
    if((Object.keys(object1).length) !== (Object.keys(object2).length)) {
        return false
    }
    for (let key in object1)
    {if (object1[key]!==object2[key]) return false;
    }
    return true;

}
                                //------------------nested func----------------------
function IsEqual(object1,object2){

    if((Object.keys(object1).length) !== (Object.keys(object2).length)) {
        return false;
    }

    for (let key in object1) {
        if (typeof(object1[key])=="object"){
            let para1=object1[key];
            let para2=object2[key];
            if (isEqualSimple(para1,para2)===false)
             return false;
        }
        else
        {
            if((object1[key]!==object2[key]))
             return false;
        }

    }
        return true;
}
const obj3 = {
    key0: false,
     key1: 'val1',
     key2: 50,
     key3: [0, 1, 2],
     key4: {name: 'amir'},
}
const obj4 = {
    key0: false,
    key1: 'val1',
    key2: 50,
    key3: [0, 1],
    key4: {name: 'amir'},
}
// console.log(IsEqual(obj3,obj4))

                    //--------------------- isSame objects function----------------------------
function isSame(object1,object2){
    if(object1===object2) 
    return true;
    else{
        return false; 
    };
    
}
                     
let obj5={name: 'amir'}
let obj6={name: 'amir'}
// console.log(isSame(obj5,obj6))

let obj7=obj5
// console.log(isSame(obj7,obj5))