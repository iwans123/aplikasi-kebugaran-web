<template>
  <!-- <div class="container"> -->
  <div class="card shadow mb-4">
    <div class="card-header py-3 d-flex justify-content-between">
      <h6 class="m-0 font-weight-bold text-primary ">
        Workout Name
        <p class="m-0 font-weight-light">
          Days
        </p>
      </h6>
      <button class="btn btn-sm btn-outline-danger">
        Remove Workout
      </button>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table id="dataTable" class="table table-bordered" width="100%" cellspacing="0">
          <thead>
            <tr>
              <th>#</th>
              <th>Exercise</th>
              <th>Sets</th>
              <th>Equipment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Push Up</td>
              <td>3x10</td>
              <td>None</td>
              <td>
                <button class="btn btn-sm btn-danger">
                  Remove Exercise
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>
