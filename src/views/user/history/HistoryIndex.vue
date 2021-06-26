<template>
  <div class="row">
      <div class="col-12">
          <div class="table-responsive m-3">
              <table class="table table-hover table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">Fight#</th>
                    <th scope="col">Bet</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Win/Lose</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in historyData" :key="data.id">
                        <TableDetails :history="data"/>
                    </tr>
                    
                </tbody>
                </table>
          </div>
      </div>
  </div>
</template>

<script>
import TableDetails from '@/views/user/history/component/TableDetails.vue';
export default {
    components:{
        TableDetails
    },
    name:'HistoryIndex',
    data(){
        return{
            historyData:[
                {
                    'id':1,
                    'betType':'meron',
                    'amount':300,
                    'status':'win',
                    'date':'june 10, 2021 10:59 AM',
                },
                {
                    'id':2,
                    'betType':'meron',
                    'amount':1000,
                    'status':'win',
                    'date':'june 1, 2021 3:59 PM',
                },
                {
                    'id':3,
                    'betType':'wala',
                    'amount':500,
                    'status':'lose',
                    'date':'june 1, 2021 4:30 PM',
                },
                {
                    'id':4,
                    'betType':'wala',
                    'amount':1500,
                    'status':'lose',
                    'date':'july 1, 2021 5:30 PM',
                },
                {
                    'id':5,
                    'betType':'wala',
                    'amount':2500,
                    'status':'draw',
                    'date':'july 1, 2021 5:30 PM',
                },
                {
                    'id':6,
                    'betType':'wala',
                    'amount':3600,
                    'status':'win',
                    'date':'july 2, 2021 6:30 PM',
                },
                {
                    'id':7,
                    'betType':'meron',
                    'amount':600,
                    'status':'win',
                    'date':'july 2, 2021 7:30 PM',
                },
                {
                    'id':8,
                    'betType':'meron',
                    'amount':850,
                    'status':'lose',
                    'date':'july 3, 2021 10:30 AM',
                },
                {
                    'id':9,
                    'betType':'meron',
                    'amount':2000,
                    'status':'draw',
                    'date':'july 5, 2021 11:30 AM',
                },
                {
                    'id':10,
                    'betType':'wala',
                    'amount':1500,
                    'status':'win',
                    'date':'july 5, 2021 12:00 AM',
                },
            ]
        }
    }

}
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
.table-hover tbody tr:hover td  {  
    // background-color: Blue;  
    color: $gold;  
   
} 

</style>
