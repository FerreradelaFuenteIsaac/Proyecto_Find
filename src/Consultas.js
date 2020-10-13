/*Todos los vehículos que sean de la marca Ford*/

db.Coches.find(
    {
        Marca: {
            $eq: "Ford"
        }
    }
).pretty()

/*Vehículos de la marca Renault con una Distancia menor a 50000*/

db.Coches.find(
    {
        Marca: "Renault",
        Distancia: { $lt: 50000}
    }
).pretty()

/*Vehículos con una Distancia mayor de 40000 y
 del año 2010 en adelante*/

db.Coches.find(
    {
       $and: 
        [ { Distancia: { $gt: 40000} },
          { Año: { $gte: 2010 } }  

        ]
    }
).pretty()

/*Vehiculos de la marca ford o 
anteriores a 2007*/

db.Coches.find(
    { $or: [
        { Marca: { $eq: "Ford"}},
        { Año: {$lt: 2007}}
    ]}
).pretty()

/*Vehículos que no sean de la Marca Renault 
ni el Modelo Fiesta y que estén entre los años
2008 y 2017*/

db.Coches.find(
    { $nor: [
                { Marca: "Renault"},
                { Modelo: "Fiesta"}
            ]}
).pretty()