<script>
export default {
  name: "Notes",
  data() {
    return {};
  },
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>

<template>
  <div class="card m-3">
    <div class="card-body h-60">
      <h2 class="card-header">Maximizing Your Productivity</h2>
      <p class="text-content2 overflow-hidden">
        Are you looking to increase your productivity at work? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Quasi reprehenderit consequuntur
        sapiente ea repellat tempora repellendus, vitae autem eius consectetur
        vero aliquam accusantium eligendi iusto quo nobis eos aspernatur
        quibusdam possimus! Doloremque, voluptate adipisci architecto quae unde
        totam deserunt voluptatem eos quibusdam autem animi nam, aspernatur
        aliquid odio veritatis quas cumque dolorum corrupti nesciunt ut repellat
        dignissimos consequuntur reprehenderit! Quod perspiciatis ullam culpa
        voluptatum iste deserunt eveniet ea, officiis ratione dolorem quos,
        asperiores tenetur sapiente officia doloremque quibusdam similique quo
        impedit exercitationem soluta fugiat maiores placeat accusantium! Magni
        adipisci saepe odio eveniet. Iure sint obcaecati praesentium neque
        cumque facilis ex.
      </p>
      <div class="flex justify-end">
        <div class="card-footer">
          <!-- <button class="btn-secondary btn">Learn More</button> -->
          <span
            @click="test"
            class="badge badge-outline-primary cursor-pointer w-14 flex justify-center items-center mr-2"
            >Details</span
          >

          <span
            @click="test"
            class="badge badge-outline-warning cursor-pointer w-14 flex justify-center items-center"
            >Edit</span
          >
        </div>
      </div>
    </div>
  </div>

  <div class="card m-3 flex items-center justify-center">
    <div class="card-body">
      <div class="btn p-0">
        <i class="fa-solid fa-circle-plus text-3xl"></i>
      </div>
    </div>
  </div>
</template>
