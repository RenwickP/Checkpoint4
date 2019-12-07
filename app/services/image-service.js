import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getPic() {
    let pic = await imgApi.get("");
    console.log("from api", pic.data.url);
    store.commit("image", pic.data.url);
    console.log("from store", store.State.image);
  }
}

const imageService = new ImageService();
export default imageService;
