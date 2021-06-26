<template>
  <div class="row">
      <div class="col-12">
        <div class="card text-white bg-dark m-3" >
            <div class="card-header">Payout</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-md-5 col-sm-12">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>please select...</option>
                            <option value="1">Bank Deposit</option>
                            <option value="2">E wallet</option>
                            <option value="3">Payment Center</option>
                        </select>
                    </div>
                    <div class="col-md-5 col-sm-12 ">
                        <div class="input-group">
                            <span class="input-group-text">$</span>
                            <input type="number" class="form-control" id="amount" >
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-12 ">
                        <div class="d-grid gap-2">
                        <button type="button" class="btn btn-outline-light">Submit</button>
                        </div>
                    </div>
                </div>
                <!-- <h5 class="card-title">Dark card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            </div>
        </div>
      </div>
      <!-- /. header -->
      <div class="col-12">
          <div class="table-responsive m-3">
              <table class="table table-hover table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">Reference#</th>
                    <th scope="col">Method</th>
                    <th scope="col">Type</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in historyData" :key="data.id">
                        <TableDetailsWithdaw :history="data"/>
                    </tr>
                    
                </tbody>
                </table>
          </div>
      </div>
  </div>
</template>

<script>
import TableDetailsWithdaw from '@/views/user/withdraw/component/TableDetailsWithdaw.vue';
export default {
    components:{
        TableDetailsWithdaw
    },
    name:'Withdraw',
    data(){
        return{
            historyData:[
                {
                    'id':'0065432',
                    'method':'bank deposit',
                    'type':'BDO',
                    'amount':44231,
                    'status':'approved',
                    'date':'june 10, 2021 10:59 AM',
                },
                {
                    'id':'2131455',
                    'method':'bank deposit',
                    'type':'Union bank',
                    'amount':1000,
                    'status':'approved',
                    'date':'june 1, 2021 3:59 PM',
                },
                {
                    'id':'001424',
                    'method':'bank deposit',
                    'type':'East West bank',
                    'amount':500,
                    'status':'rejected',
                    'date':'june 1, 2021 4:30 PM',
                },
                {
                    'id':'000012',
                    'method':'e wallet',
                    'type':'G cash',
                    'amount':1500,
                    'status':'pending',
                    'date':'july 1, 2021 5:30 PM',
                },
                {
                    'id':'5123213',
                    'method':'e wallet',
                    'type':'Bit coin',
                    'amount':2500,
                    'status':'pending',
                    'date':'july 1, 2021 5:30 PM',
                },
                {
                    'id':'000006',
                    'method':'Payment Center',
                    'type':'7-eleven',
                    'amount':789,
                    'status':'pending',
                    'date':'july 2, 2021 6:30 PM',
                },
                {
                    'id':'12140004',
                    'method':'Payment Center',
                    'type':'LBC',
                    'amount':600,
                    'status':'rejected',
                    'date':'july 2, 2021 7:30 PM',
                },
                {
                    'id':'200054',
                    'method':'Payment Center',
                    'type':'Palawan',
                    'amount':550,
                    'status':'approved',
                    'date':'july 3, 2021 10:30 AM',
                },
                {
                    'id':'00202431',
                    'method':'Payment Center',
                    'type':'RD pawnshop',
                    'amount':3340,
                    'status':'approved',
                    'date':'july 5, 2021 11:30 AM',
                },
                {
                    'id':'0022413',
                    'method':'Payment Center',
                    'type':'Robinsons',
                    'amount':1500,
                    'status':'rejected',
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