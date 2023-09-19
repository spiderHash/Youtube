import axios from 'axios';


export const videoFetch = async(id) => {
    const { data } = await axios.request({
    method: 'GET',
    url: 'https://ytstream-download-youtube-videos.p.rapidapi.com/dl',
    params: {id: id},
    headers: {
      'X-RapidAPI-Key': 'RAPIDAPI_KEY',
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
    'X-RapidAPI-Key': 'RAPIDAPI_KEY',
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
        'X-RapidAPI-Key': 'RAPIDAPI_KEY',
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