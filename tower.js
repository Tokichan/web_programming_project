

class Tower{
    constructor(type="normal"){
        this.type = type //normal sniper range
        this.level = 1

        if(this.type=="normal"){
            this.power = 20
            this.range = 30
            this.attackable = 1
        }else if(this.type=="sniper"){
            this.power = 10
            this.range = 300
            this.attackable = 1
        }else if(this.type=="range"){
            this.power = 10
            this.range = 30
            this.attackable = -1
        }
    }

    get_power(){
        return this.power
    }


    get_range(){
        return this.range
    }

    get_attackable(){
        return this.attackable
    }

    get_level(){
        return this.level
    }

    increase_level(){
        this.level+=1
    }

    increase_attackable(){
        this.attackable+=1
    }
    decrease_attackable(){
        this.attackable-=1
    }


    power_up(){
        this.increase_level()
        this.power *= 1.2
        this.power = parseInt(this.power)
    }


    range_up(){
        this.increase_level()
        this.range *= 1.2
        this.range = parseInt(this.range)
    }

}
