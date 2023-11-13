export function playAudio(url:string, volume:number) {
    let audio = new Audio(url);
    audio.volume = volume;
    audio.play()
  }