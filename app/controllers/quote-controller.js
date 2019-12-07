import QuoteService from "../services/quote-service.js";
// import quoteService from "../services/quote-service.js";
import store from "../store.js";

//TODO Create methods for constructor, and rendering the quote to the page
//      (be sure to review the HTML as an element already was put there for you)

function drawQuote() {
  let q = store.State.quote;
  let template = `<p>${q.data.quote.body}</p><p>${q.data.quote.author}</p>`;
  template += document.querySelector("#quote").innerHTML = template;
}

export default class QuoteController {
  constructor() {
    QuoteService.quote();
    store.subscribe("quote", drawQuote);
  }
}
