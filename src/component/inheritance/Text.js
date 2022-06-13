import Emoji from "./Emoji";

export default class Text extends Emoji{
  constructor(props){
    super(props);
  }

  render(){
    const decoratedText = this.addEmoji('I am Jansir', '<3');
    return super.render(decoratedText);
  }
}