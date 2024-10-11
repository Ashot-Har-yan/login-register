import {Flex,Button} from 'antd';
import { ROUTE_CONSTANTS } from "../../core/utils/constants";
import { Link } from 'react-router-dom';
import './index.css'

const Header = ()=>{
    return(
        <div className='main_header'>
            <Flex justify='space-between' align = 'center'>
                <p>Jira</p>
                <div>
                    
                    <Link to = {ROUTE_CONSTANTS.LOGIN}>
                    <Button >
                        Login
                    </Button>
                    </Link>
                </div>
            </Flex>
        </div>
    )
}

export default Header;
