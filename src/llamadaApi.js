const API_URL = "https://api.jikan.moe/v4";

export async function getManga(){
    try {
        const respuesta = await fetch(`${API_URL}/manga`);
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.error(error);;
    }
}

export async function getMangabyId(idManga){
    try {
        const respuesta = await fetch(`${API_URL}/manga/${idManga}`);
        const data = await respuesta.json();
        return data.data;
    } catch (error) {
        console.error(error);
    }
}

