
## 🚀 About Me
I want to be full stack developer...
Is a personal little project for practice my skils in javascript and react, i will wish learn more to this technologies for my formation to developer </p>

# Mini Project to gifs

Mini Project to gifs
Is a personal little project for practice my skils in javascript and react, i will wish learn more to this technologies for my formation to developer
Trata sobre un buscador que conecta una API de gifs en la cual puedes buscar un nombre y te mostrara una cantidad determinada de gifs relacionados con la busqueda que realizaste</p>

## Authors

- [@jramirez0202](https://github.com/jramirez0202)


## API Reference

#### Get all items

```http
  GET https://api.giphy.com/v1/gifs/search?api_key=key&q=search&limit=10
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. FyqQ7rbkT8VjFarYtrxWMs3igWmCxeX4 |

#### Get item

```http
  GET https://api.giphy.com/v1/gifs/search?api_key=FyqQ7rbkT8VjFarYtrxWMs3igWmCxeX4&q=one_piece&limit=10
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `one piece`| `string` | **Required**. one_piece |



## Tech Stack

**Client:** Vite + React

**Server:** Node

To start: yarn dev

localhost: http://localhost:####/


{
  "name": "gif-expert-app",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.26",
    "@types/react-dom": "^18.0.9",
    "@vitejs/plugin-react": "^3.0.0",
    "vite": "^4.0.0"
  }
}