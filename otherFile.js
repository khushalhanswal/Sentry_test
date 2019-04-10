function callfucntion() {
    let a = [2,3,4,6];
    length =10
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#from-other-file').addEventListener('click', () => {
        Sentry.captureException(new Error('From other file - exception'));
      });

    document.querySelector('#TypeError').addEventListener('click', () => {
        callfucntion();
    })
}
)