function LoadingBar(n){
    let percentage = n / 10;
    let dots = 10 - percentage;
    let bar = '%'.repeat(percentage);
    let empty = '.'.repeat(dots);
    if (percentage < 10) {
        console.log(`${n}% [${bar}${empty}]`);
        console.log('Still loading...');
    } else {
        console.log('100% Complete!');
    }
}

LoadingBar(30); // 30% [%%%.....]
LoadingBar(50); // 50% [%%%%%....]
LoadingBar(100); // 100% Complete!
