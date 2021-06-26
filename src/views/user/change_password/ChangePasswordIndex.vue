<template>
  <div class="row m-3 g-5">
      <div class="col-md-8 col-sm-12 mx-auto">
        <div class="card text-dark bg-light mb-3">
            <div class="card-body">
                <form>
                    <h4 class="mb-3">Change Password</h4>
                    <div class="row g-3">
                        <div class="col-md-12 col-sm-12">
                            <label for="firstName" class="form-label">Current Password</label>
                            <input type="text" class="form-control" id="password" placeholder="" value="" required="">
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-12">
                            <label for="firstName" class="form-label">Password</label>
                            <input type="text" class="form-control" id="password" placeholder="" value="" required="">
                            <div class="invalid-feedback">
                            Valid first name is required.
                            </div>
                        </div>

                        <div class="col-md-6 col-sm-12">
                            <label for="firstName" class="form-label">Confirm Passowrd</label>
                            <input type="text" class="form-control" id="password" placeholder="" value="" required="">
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
    name:'ChangePasswordIndex'

}
</script>

<style>

</style>