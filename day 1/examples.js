let rosie = {
    _name: "Rosie",
    _thirst: 50,
    _isWiggling: false,
    _isHopping: false,
    get name(){
        return this._name;
    },
    get drink(){
        this._thirst -= 10;
        return this._thirst;
    }

}

console.log(rosie.name);
console.log(rosie.drink);