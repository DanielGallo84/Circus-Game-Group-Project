export function playAudio(url:string, volume:number, loop:boolean) {
    let audio = new Audio(url);
    audio.volume = volume;
    if (loop === undefined) {
      loop = false;
    }
    audio.play()
  }