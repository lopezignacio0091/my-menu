# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

!! IMPORTANTE LEVANTAR EL SERVER PARA QUE LA MISMA FUNCIONE CORRECTAMENTE , OPTE POR CORRER LA MISMA EN OTRO PUERTO DIFERENTE .

### `npm start server`
npx json-server --port 8080 --watch db.json 

### `npm start`
npm run start
### `APP`

NODE: version 14 

REDUX : Opte utilizar el mismo para mantener  un estado global de la aplicacion , mas  que nada por que no se la escabilidad que va a tener la misma y se puede volver tedioso al usar solo estados en los componentes . 

STYLED COMPONENTS: Elegi la misma ya que no quise utilizar una libreria para css , mas que nada por que siempre se esta dependiendo muchisimo de las actualizaciones de la misma y una de la gran  de usar styled es que podemos mezclar codigo con la  lógica de JavaScript.

JSON_SERVER: Quise simular la misma para que el dia de mañana ya sea cual sea la decision de encarar la api , solo se va a tener que modificar las rutas del servicio y la misma va a funcionar correctamente . 

