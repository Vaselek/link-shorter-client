import axios from '../../axios-link';

export const TRANSFORM_LINK_SUCCESS = 'TRANSFORM_LINK_SUCCESS';
export const TRANSFORM_LINK_ERROR = 'TRANSFORM_LINK_ERROR';


export const transformLinkSuccess = (link) => {
    return ({type: TRANSFORM_LINK_SUCCESS, link})
}

export const transformLinkError = (error) => {
    return ({type: TRANSFORM_LINK_ERROR, error})
}

export const transformLink = (link) => {
    return dispatch => {
        return axios.post('/links', {originalUrl: link}).then(
            response => dispatch(transformLinkSuccess(response.data.shortUrl)),
            error => dispatch(transformLinkError(error.response.data))
        )
    }
}