import style from "./CityList.module.scss"
import {SearchIcon} from "../Icon/Search/SearchIcon";
import PropTypes from "prop-types";
import {CityItem} from "./CityItem";
import {useState} from "react";

CityList.propTypes={
    cities:PropTypes.array.isRequired,
    onClick: PropTypes.func,
    select: PropTypes.object
}

export function CityList(props) {
    const [select,setSelect] = useState(props.select?props.select:{city:''});
    const [list,setList] = useState(props.cities);

    const selectSearch = (city)=>{
        const res = props.cities.find((value)=>value.city === city);
        if(res) {
            setSelect(res);
            if(props.onClick instanceof Function) {
                props.onClick(res);
            }
        }
    }

    const searchFilter = (search)=>{
        const searchLower = search.toLowerCase();
        return  props.cities.filter(item=>{
            const cityLower = item.city.toLowerCase();
            const countryLower = item.country.toLowerCase();
            return cityLower.includes(searchLower) || countryLower.includes(searchLower);
        });
    }

    return(
        <div className={style.cityList}>
            <div className={style.search}>
                <input placeholder={'Search for country or city'}  onChange={(event)=>{
                    const inp = event.currentTarget.value;
                    if(inp.length===0) {
                        setList(props.cities)
                    } else {
                        setList(searchFilter(inp));
                    }
                }}/>
                <SearchIcon spanClass={style.searchIcon} />
            </div>
            <div className={style.list}>
                {list.length>0?
                    list.map((val)=>(
                        <CityItem
                            key={val.city}
                            city={val.city}
                            country={val.country}
                            flag={val.flag}
                            select={select.city===val.city}
                            info={val.info}
                            onClick={(data)=>{
                                selectSearch(data.city);
                            }}
                        />
                    ))
                    :
                    <p className={'text-center'}>
                        0 items
                    </p>
                }
            </div>
        </div>
    );
}