class Query  {

    //this is the class constructor
    constructor(select,from,where) {
       this.select = select;
       this.from = from;
       this.where = where;
    }

    getSelect() {
        return this.select;
    }

    getFrom() {
        return this.from;
    }

    getWhere() {
        return this.where
    }

    getFullQuery(){
        return `${this.getSelect()} ${this.getFrom()} ${this.getWhere()}`;
    }

}

module.exports = Query;