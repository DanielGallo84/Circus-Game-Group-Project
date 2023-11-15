export function playAudio(id:string, volume:number, loop:boolean) {
    let audio = document.getElementById(id)
    audio.volume = volume;
    audio.loop = loop
    if (loop === undefined) {
      audio.loop = false;
    }
    audio.play()
  }