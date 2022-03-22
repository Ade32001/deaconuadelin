#include<iostream>
using namespace std;
int n,i,numar,medie;
int main()
{
    cin>>n;
    medie=0;
    for(i=1;i<=n;i++)
    {
        cin>>numar;
        medie=medie+numar;
    }
    medie=medie/n;
    cout<<medie;

    return 0;
}