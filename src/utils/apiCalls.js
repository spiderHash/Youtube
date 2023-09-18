import axios from 'axios';


export const videoFetch = async(id) => {
    const { data } = await axios.request({
    method: 'GET',
    url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
    params: {id: id},
    headers: {
      'X-RapidAPI-Key': 'c243fd25e1msh4155ea2bd772593p1c2ac6jsn0de69e747b1d',
      'X-RapidAPI-Host': 'ytstream-download-youtube-videos.p.rapidapi.com'
    }
  });
  //   console.log("api1 " + new Date());
  return data;

}

export const downloadMp3 = async(id) => {
console.log("processing mp3");
const options = {
  method: 'GET',
  url: 'https://youtube-mp36.p.rapidapi.com/dl',
  params: {id: id},
  headers: {
    'X-RapidAPI-Key': 'a39f0b13b5mshc36b3a888463ad1p1eb654jsn0fdf14f17155',
    'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
  }
};

    try {
        const response = await axios.request(options);
        if(response.data.status=="processing")
            setTimeout(() => {
                downloadMp3(id);
            }, 1000);
        else 
            window.open(response.data.link);

    } catch (error) {
            console.error(error);
    }
}



export const search = async(query) =>{ 
    const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
        ...query,
        part: 'snippet,id',
        maxResults: '4'
    },
    headers: {
        'X-RapidAPI-Key': 'a39f0b13b5mshc36b3a888463ad1p1eb654jsn0fdf14f17155',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
    };
    
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}