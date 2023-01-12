


const menuClasicos =[ 'Gin Old Fashion', 'Aperol Spritz', 'Cherry Baby', 'Espresso Martini', 'Fresh Mint', 'Grapefruit Fizz'];

const menuEpecialidades =['Garibaldi', 'Blue Lady', 'Apricot Sunrise', 'Watermelon Dream', 'Tropical Blackberry', 'Singapore Sling'];

const menuTemporada =['Little Spring', 'Club Floral', 'Purple Martini', 'Cosmo Valentine', 'Gin Wild Berry', 'Purple Horizon'];


class Clasicos  {
    constructor (nombre, precio, categoria, ingredientes,img, dataId, LebelID, btnID){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.ingredientes = ingredientes;
        this.img = img;
        this.dataId=dataId;
        this.LebelID=LebelID;
        this.btnID=btnID;

}

}

class Especiales  {
    constructor (nombre, precio, categoria, ingredientes,img, dataId, LebelID, btnID){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.ingredientes = ingredientes;
        this.img = img;
        this.dataId=dataId;
        this.LebelID=LebelID;
        this.btnID=btnID;

    
    }
    
    }

    class Temporada {
        constructor (nombre, precio, categoria, ingredientes,img, dataId, LebelID, btnID){
            this.nombre = nombre;
            this.precio = precio;
            this.categoria = categoria;
            this.ingredientes = ingredientes;
            this.img = img;
            this.dataId=dataId;
            this.LebelID=LebelID;
            this.btnID= btnID;

        
        }
        
        }


//Objetos

const  coctel1 = new Clasicos(menuClasicos[0], 75, "clasicos", "Gin, Sugar Syrup, Angostura Bitters y Orange Bitters", "ginoldfashion.png",1, "SlecCanti1", "botonOrdenar1");
const  coctel2 = new Clasicos(menuClasicos[1], 75, "clasicos", "Proseco, Aperol, Soda", "aperolspritz.png",2, "SlecCanti2", "botonOrdenar2");
const  coctel3 = new Clasicos(menuClasicos[2], 75, "clasicos", "Gin, Amaro, Licor de Cereza, Jugo de Limón", "cherrybaby.png",3, "SlecCanti3", "botonOrdenar3");
const  coctel4 = new Clasicos(menuClasicos[3], 75, "clasicos", "Vodka, Licor de Café, Freshly Brewed Espresso, Jarabe de Azúcar", "espressomartini.png",4, "SlecCanti4", "botonOrdenar4");
const  coctel5 = new Clasicos(menuClasicos[4], 75, "clasicos", "Gin, Jugo de limón, Hojas de Menta, Agua Mineral", "freshmint.png",5, "SlecCanti5", "botonOrdenar5");
const  coctel6 = new Clasicos(menuClasicos[5], 75, "clasicos", "Gin, Jugo de Toronja, Agua Tónica, Jarabe de Romero", "grapefruitfizz.png",6, "SlecCanti6", "botonOrdenar6");
const drinksClasicos = [coctel1, coctel2, coctel3, coctel4, coctel5, coctel6]


const  coctel7 = new Especiales(menuEpecialidades[0], 80, "especialidades", "Gin, Camparim jugo de naranja", "garibaldi.png",7, "SlecCanti7", "botonOrdenar7");
const  coctel8 = new Especiales(menuEpecialidades[1], 80, "especialidades", "Gin, Curacao, Juego de Lima, Huevo", "bluelady.png",8, "SlecCanti8", "botonOrdenar8");
const  coctel9 = new Especiales(menuEpecialidades[2], 80, "especialidades", "Gin, Juego de Limón, Naranja, Apricot", "apricotsunrise.png", 9, "SlecCanti9", "botonOrdenar9");
const  coctel10 = new Especiales(menuEpecialidades[3], 80, "especialidades", "Gin, Champari, Juego de Lima, Sandía","watermelondream.png",10, "SlecCanti10", "botonOrdenar10");
const  coctel11 = new Especiales(menuEpecialidades[4], 80, "especialidades", "Gin, Chambord, Juego de Piña, Juego de Lima, Bkackberries", "tropicalblackberry.png",11, "SlecCanti11", "botonOrdenar11");
const  coctel12= new Especiales(menuEpecialidades[5], 80, "especialidades", "Gin, Licor de Cereza, Jugo de Piña, Jugo de Limón, Granadina, D.O.M Bénédictine", "singaporesling.png",12, "SlecCanti12", "botonOrdenar12");
const drinksEspeciales = [coctel7, coctel8, coctel9, coctel10, coctel11, coctel12]

const  coctel13= new Temporada(menuTemporada[0], 85, "temporada", "Gin, Limoncelo, Crema de Coco, Jugo de Limón, Lavanda.","littlespring.png",13, "SlecCanti13", "botonOrdenar13");
const  coctel14= new Temporada(menuTemporada[1], 85, "temporada", "Gin, Creama de Violetas, Jugo de Lima, Jarabe de Lavanda, Gin, Vermouth.", "clubfloral.png",14, "SlecCanti14", "botonOrdenar14");
const  coctel15= new Temporada(menuTemporada[2], 85, "temporada", "Gin, Vermouth, Naranja.","pirplemartini.png" ,15, "SlecCanti15", "botonOrdenar15");
const  coctel16= new Temporada(menuTemporada[3], 85, "temporada", "Gin, Chambord, Juego de Limón, Fresas.", "valentinecosmo.png",16, "SlecCanti16", "botonOrdenar16");
const  coctel17= new Temporada(menuTemporada[4], 85, "temporada", "Gin, Juego de Limón, Limonada de Frutos Salvajes, Berries", "ginwild.png",17, "SlecCanti17", "botonOrdenar17");
const  coctel18= new Temporada(menuTemporada[5], 85, "temporada", "Gin, Jugo de Limón, Chambord, Black Gin, Huevo.","purplehorizon.png",18, "SlecCanti18", "botonOrdenar18");
const drinksTemporada = [coctel13, coctel14, coctel15, coctel16, coctel17, coctel18]

const allDrinks = [coctel1, coctel2, coctel3, coctel4, coctel5, coctel6, coctel7, coctel8, coctel9, coctel10, coctel11, coctel12, coctel13, coctel14, coctel15, coctel16, coctel17, coctel18]

export default allDrinks;