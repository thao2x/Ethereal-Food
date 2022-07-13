<template>
  <div class="container-birthday p-5">
    <div class="mt-3 col-12">
       <div class="row">
          <div class="col-lg-6 pb-3">
            <h3 class="text-left bold"><font-awesome-icon icon="fa-solid fa-cake-candles" /> Sinh Nhật Trong Tháng</h3>
          </div>
      </div>
      <b-card-group deck>
        <div class="row">
          <div
            class="col-lg-3 mb-3"
            v-for="(item, index) in items"
            :key="index"
          >
            <b-card
              :title="item.nameEmployee"
              :img-src="item.avatar"
              :img-alt="item.nameEmployee"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2"
            >
              <b-card-text>
                <h5>{{item.birthday}}</h5>
              </b-card-text>

              <b-button href="#" variant="primary"><font-awesome-icon icon="fa-solid fa-eye" /> Chi tiết</b-button>
            </b-card>
          </div>
        </div>
      </b-card-group>
    </div>
    <DetailEmployee></DetailEmployee>
    <pagination></pagination>
  </div>
</template>

<script>
import pagination from "@/components/pagination/pagination";
import DetailEmployee from "@/components/popups/DetailEmployee";
export default {
  components: {
    pagination,
    DetailEmployee,
  },
  data() {
    return {
      items: [
        {
          nameEmployee: "Nguyễn Thị An",
          birthday: "1998-07-20",
          gender: 0,
          email: "nam01@gmail.com",
          phoneNumber: "09242472340",
          identityCard: "94543843584547",
          issuedBy: "Quảng Nam",
          dayRange: "2022-02-02",
          address: "Quảng Nam",
          resident: "abc",
          married: 1,
          avatar:
            "https://static.hanet.ai/face/employee/8011/f9d38481-845e-406b-9969-74800c15f621.jpg",
          idDepartment: "dp001",
          idPosition: "ps001",
          idEdu: "ed001",
          positions: null,
          departments: "Giám đốc",
          educations: null,
        },
        {
          nameEmployee: "Nguyễn Thị My La",
          birthday: "2001-03-24",
          gender: 0,
          email: "mylasayhii@gmail.com",
          phoneNumber: "0826342403",
          identityCard: "9454384358454",
          issuedBy: "Đà Nẵng",
          dayRange: "2022-02-02",
          address: "Đà Nẵng",
          resident: "Quang Binh",
          married: 1,
          avatar:
            "https://static.hanet.ai/face/employee/8011/42396877-21b7-4631-a750-bef13d0d6635.jpg",
          idDepartment: "dp002",
          idPosition: "ps002",
          idEdu: "ed002",
          positions: null,
          departments: "Lao công",
          educations: null,
        },
        {
          nameEmployee: "Nguyễn Thị An",
          birthday: "1998-07-20",
          gender: 0,
          email: "nam01@gmail.com",
          phoneNumber: "09242472340",
          identityCard: "94543843584547",
          issuedBy: "Quảng Nam",
          dayRange: "2022-02-02",
          address: "Quảng Nam",
          resident: "abc",
          married: 1,
          avatar:
            "https://static.hanet.ai/face/employee/8011/f9d38481-845e-406b-9969-74800c15f621.jpg",
          idDepartment: "dp001",
          idPosition: "ps001",
          idEdu: "ed001",
          positions: null,
          departments: "Giám đốc",
          educations: null,
        },
        {
          nameEmployee: "Nguyễn Thị An",
          birthday: "1998-07-20",
          gender: 0,
          email: "nam01@gmail.com",
          phoneNumber: "09242472340",
          identityCard: "94543843584547",
          issuedBy: "Quảng Nam",
          dayRange: "2022-02-02",
          address: "Quảng Nam",
          resident: "abc",
          married: 1,
          avatar:
            "https://static.hanet.ai/face/employee/8011/f9d38481-845e-406b-9969-74800c15f621.jpg",
          idDepartment: "dp001",
          idPosition: "ps001",
          idEdu: "ed001",
          positions: null,
          departments: "Giám đốc",
          educations: null,
        },
        {
          nameEmployee: "Nguyễn Thị An",
          birthday: "1998-07-20",
          gender: 0,
          email: "nam01@gmail.com",
          phoneNumber: "09242472340",
          identityCard: "94543843584547",
          issuedBy: "Quảng Nam",
          dayRange: "2022-02-02",
          address: "Quảng Nam",
          resident: "abc",
          married: 1,
          avatar:
            "https://static.hanet.ai/face/employee/8011/f9d38481-845e-406b-9969-74800c15f621.jpg",
          idDepartment: "dp001",
          idPosition: "ps001",
          idEdu: "ed001",
          positions: null,
          departments: "Giám đốc",
          educations: null,
        },
      ],
    };
  },
  created() {},
  methods: {
    clickCallback: function (page)
 {
      console.log(page)
;
    },
  },
  computed: {},
  watch: {},
};
</script>


<style scoped>
.container-birthday{
  background:#F5F5F5;
}
.content-birthday {
  display: flex;
  column-gap: 30px;
  width: 90%;
  margin: auto;
}
h1 {
  color: #dc3545;
  margin-top: 1.5rem;
}
h4,
.h4 {
  font-size: 1.3rem;
}
.no-gutters {
  background: #84f2ff;
  background: linear-gradient(0deg, #84f2ff 0%, #daf5ff 80%);
}

.col-md-3 {
  flex: 0 0 30% !important;
  max-width: 30%;
}
.btn-primary{
  border-radius: 20px;
  width: 150px;
}
.card-img, .card-img-top{
  clip-path: circle(75px at 50% 50%);
}
.card-title{
  font-weight: 600;
}
</style>