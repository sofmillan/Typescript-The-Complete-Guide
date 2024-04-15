//Creates a new type, describing the property na,mes and value types of an object

interface Reportable{
    summary(): string;
}

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary():string{
        return `Name: ${this.name}`
    }
}

const pepsi = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string{
        return `This drink has ${this.sugar} grams of sugar`
    }
}

const printSummary = (item: Reportable):void => {
    console.log(item.summary);
}

printSummary(oldCivic);
printSummary(pepsi);