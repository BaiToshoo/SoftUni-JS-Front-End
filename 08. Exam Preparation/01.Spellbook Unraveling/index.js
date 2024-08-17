function decipherSpellbook(input) {
    let mysteriousspellInput = input.shift();
    const commands = {
        RemoveEven(){
            let result = '';
            for (let i = 0; i < mysteriousspellInput.length; i++) {
                if(i % 2 == 0){
                    result += mysteriousspellInput[i];
                }
            }
            mysteriousspellInput = result;
            console.log(mysteriousspellInput);
        },
        TakePart(startingIndex, endingIndex){
            const start = Number(startingIndex);
            const end = Number(endingIndex);
            mysteriousspellInput= mysteriousspellInput.slice(start, end);
            console.log(mysteriousspellInput);
        },
        Reverse(substring){
            if(mysteriousspellInput.includes(substring)){
                const reversed = substring.split('').reverse().join('');
                mysteriousspellInput = mysteriousspellInput.replace(substring, '');
                mysteriousspellInput += reversed;
                console.log(mysteriousspellInput);
            } else {
                console.log('Error');
        }
    }
}

    let commandInput = input.shift();

    while(commandInput !== 'End'){
        const [command, ...params] = commandInput.split('!');
        commands[command](...params);
        commandInput = input.shift();
    }
    console.log(`The concealed spell is: ${mysteriousspellInput}`);

}

decipherSpellbook(["hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m", 
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"])
    
