// import {SEARCH_YOUTUBE, UPDATE_INPUT_VALUE, START_SESSION, STOP_SESSION, LOG_IN, LOG_OUT, TOGGLE_INFO_MODAL, SELECT_VIDEO, GET_USER_INFO} from './actions';
// import Auth from './Auth/Auth';
// import StatisticSheet from './statisticSheet';
// import SearchResult from './searchResult';
//
//
//
// const auth = new Auth();
//
// const initialState = {
//     auth: auth,
//     serverUrl:'http://localhost:3001/api/v1',
//     inputValue: "",
//     results: null,
//     videoId: null,
//     calmStatsId: "",
//     currentStatistics: null,
//     averageStatistics: null,
//     recordStatistics: null,
//     currentStats:[
//         {
//             title: "Total number of sessions:",
//             value: 45
//         },
//         {
//             title: "Total time in meditation:",
//             value: '1 Days :55 Mins: 30 Secs'
//         },
//         {
//             title: "Average session length:",
//             value: '33 Mins: 23 Secs'
//         },
//         {
//             title: "Current daily meditation streak:",
//             value: 37
//         }
//     ],
//
//
// };
//
// export const reducer = (state=initialState, action) => {
//     state = state || initialState;
//
//     if(action.type === LOG_IN){
//         auth.login();
//     }
//
//     else if(action.type === LOG_OUT){
//         auth.logout();
//     }
//
//     else if(action.type === UPDATE_INPUT_VALUE){
//         state = Object.assign({}, state, {
//             inputValue: state.inputValue
//         });
//         //console.log(evt.target.value);
//     }
//
//     else if(action.type === START_SESSION){
//         const calmId = this.state.calmStatsId;
//
//         const dateString = new Date();
//         const dateMilliseconds =  dateString.getTime();
//
//         fetch(this.serverUrl + '/sessions/start/' + dateMilliseconds+ '/' + calmId)
//             .then(function (response) {
//                 //console.log(response, 'response from set session');
//                 return response.json();
//             })
//             .then(function(json) {
//                 console.log('parsed json', json)
//             })
//             .catch(function(ex) {
//                 console.log('parsing failed', ex)
//             })
//     }
//
//     else if(action.type === STOP_SESSION){
//         const calmId = this.state.calmStatsId;
//
//         const dateString = new Date();
//         const dateMilliseconds =  dateString.getTime();
//
//         fetch(this.serverUrl + '/sessions/stop/' + dateMilliseconds+ '/' + calmId)
//             .then(function (response) {
//                 console.log(response);
//                 return response.json();
//             })
//             .then(function(json) {
//                 console.log('parsed json', json.stat)
//             })
//             .catch(function(ex) {
//                 console.log('parsing failed', ex)
//             })
//     }
//
//     else if(action.type === GET_USER_INFO){
//         console.log('get user info ');
//         const that = this;
//         console.log(localStorage.getItem('access_token'));
//         if(localStorage.getItem('access_token')){
//
//             fetch(this.serverUrl + '/sessions/getstats/' + localStorage.getItem('access_token'))
//                 .then(function (response) {
//                     //console.log(response, 'get user info response');
//                     return response.json();
//                 })
//                 .then(function(json) {
//                     //console.log('parsed json', json);
//                     const id = json.calmStatsId;
//                     // console.log(id, 'id from getUserInfo');
//                     //that.setState({
//                     state = Object.assign({}, state, {
//                         calmStatsId: id
//                     });
//                     const statisticsLineCurrent = json.currentStats.map((result, index) =>
//                         <StatisticSheet key={index} title={that.title} value={that.value} {...result}/>
//                     );
//                     // const statisticsLineAverage = json.averageStats.map((result, index) =>
//                     //     <StatisticSheet key={index} title={this.title} value={this.value} {...result}/>
//                     // );
//                     // const statisticsLineRecord = json.recordStats.map((result, index) =>
//                     //     <StatisticSheet key={index} title={this.title} value={this.value} {...result}/>
//                     // );
//                     state = Object.assign({}, state, {
//                         currentStatistics: statisticsLineCurrent
//
//                     })
//                    // console.log(statisticsLineCurrent)
//
//                     //     averageStatistics: statisticsLineAverage,
//                     //     recordStatistics: statisticsLineRecord
//                 })
//                 // .then(function(){
//                 //     //console.log(that.state.calmStatsId)
//                 // })
//                 .catch(function(ex) {
//                     console.log('parsing failed', ex)
//                 })
//         }
//     }
//
//     else if(action.type === SELECT_VIDEO){
//         function loadVideo(videoId){
//             //console.log(videoId);
//             context.setState({
//                 videoId: videoId
//             });
//             console.log(context.state)
//         }
//     }
//
//     else if(action.type === SEARCH_YOUTUBE){
//         console.log(this.serverUrl, "sendSearch() server url");
//         const that = this; //do i still need this   ????????
//
//
//
//         fetch(this.serverUrl + '/search/' + this.state.inputValue)
//             .then(function(response){
//                 return response.json();
//
//             })
//             .then(function(json) {
//                 console.log('parsed json', json);
//                 // resultRelay = {json};
//                 // console.log(resultRelay, 'full');
//                 const results = json.items.map((result, index) =>
//                     <SearchResult key={index}  context={that} {...result} />
//                 );
//                 //
//                 state = Object.assign({}, state, {
//                     results: results
//                 });
//
//                 //console.log(results);
//
//             })
//             .catch(function(ex) {
//                 console.log('parsing failed send search function', ex)
//             });
//         console.log('sent search to server');
//     }
//
//
//     return state;
// };