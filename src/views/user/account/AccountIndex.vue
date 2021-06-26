<template>
  <div class="row m-3 g-5">
      <div class="col-md-8 col-sm-12 mx-auto">
        <div class="card text-dark bg-light mb-3">
            <div class="card-body">
                <form>
                    <h4 class="mb-3">Account Information</h4>
                    <div class="row g-3">
                        <div class="col-md-6 col-sm-6 text-start">
                            <label for="username" class="form-label ">Username</label>
                            <input type="text" class="form-control" id="username" placeholder="" value="test1235" required="" readonly>
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 text-start">
                            <label for="email" class="form-label ">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="" value="test1235" required="" readonly>
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 text-start">
                            <label for="fname" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="fname" placeholder="" value="" required="">
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 text-start">
                            <label for="lname" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lname" placeholder="" value="" required="">
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-6 text-start">
                            <label for="pnumber" class="form-label">Phone Number</label>
                            <input type="text" class="form-control" id="pnumber" placeholder="" value="" required="">
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6 text-start">
                            <label for="bod" class="form-label">Birt Date</label>
                            <input type="date" class="form-control" id="bod" placeholder="" value="" required="">
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                        <button class="w-100 btn btn-dark btn-lg" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <!-- /. card body -->
        </div>
        <!-- /. card -->
            
            
      </div>
  </div>
</template>

<script>
export default {
    name:'AccountIndex'

}
</script>

<style>

</style>