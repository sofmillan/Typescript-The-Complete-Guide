/// <reference types="@types/google.maps" />
import { User } from './User';
import { Company } from './Compay';
import { CustomMap } from './CustomMap';


const customMap = new CustomMap('map');
const user = new User();

customMap.addUserMarker(user)
