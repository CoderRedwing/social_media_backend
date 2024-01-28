class ApiResponse{
    constructor(statsCode,data,message = "success"){
        this.statsCode=statsCode
        this.message=message
        this.data=data
        this.success=statsCode<400

    }
}