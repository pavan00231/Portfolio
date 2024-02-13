

export const FormateDate = (date) => {
    const hours = new Date(date).getHours();
    const minutes = new Date(date).getMinutes();

    return `${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes}`
}

export const downloadMedia = (e, orginalImage) => {
    e.preventDefault();

    try {
        fetch(orginalImage)
            .then((res) => res.blob())
            .then((blob) => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;

                const nameSplit = orginalImage.split('/');
                const duplicateName = nameSplit.pop();

                a.download = '' + duplicateName + "";


                document.body.appendChild(a)
                a.click();
                window.URL.revokeObjectURL(url)
            })

            .catch((err) => console.log("error in download", err.message))



    } catch (error) {
        console.log(error.message);
    }
}


export const goToTab = () => {

}