import store from "../store";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class ImageService {
  async getPic() {
    let pic = await imgApi.get();
    store.commit("image", pic);
    console.log(pic);
    console.log("from commit", pic);
  }
}

const imageService = new ImageService();
export default imageService;
