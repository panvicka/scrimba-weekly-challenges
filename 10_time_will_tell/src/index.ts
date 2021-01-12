type ClockShow = {
  cityName: string;
  timeDif: number;
};

const arrayOfClockShows: Array<ClockShow> = [
  {
    cityName: 'Taulaga',
    timeDif: -11,
  },
  {
    cityName: 'Honolulu',
    timeDif: -10,
  },
  {
    cityName: 'Anchorage',
    timeDif: -9,
  },
  {
    cityName: 'Los Angeles',
    timeDif: -8,
  },
  {
    cityName: 'Denver',
    timeDif: -7,
  },
  {
    cityName: 'Chicago',
    timeDif: -6,
  },
  {
    cityName: 'Havana',
    timeDif: -5,
  },
  {
    cityName: 'Caracas',
    timeDif: -4,
  },
  {
    cityName: 'Buenos Aires',
    timeDif: -3,
  },
  {
    cityName: 'Grytviken',
    timeDif: -2,
  },
  {
    cityName: 'Santa Cruz',
    timeDif: -1,
  },
  {
    cityName: 'London',
    timeDif: 0,
  },
  {
    cityName: 'Amsterdam',
    timeDif: 1,
  },
  {
    cityName: 'Helsinki',
    timeDif: 2,
  },
  {
    cityName: 'Moscow',
    timeDif: 3,
  },
  {
    cityName: 'Volgograd',
    timeDif: 4,
  },
  {
    cityName: 'Male',
    timeDif: 5,
  },
  {
    cityName: 'Dhaka',
    timeDif: 6,
  },
  {
    cityName: 'Bangkok',
    timeDif: 7,
  },
  {
    cityName: 'Perth',
    timeDif: 8,
  },
  {
    cityName: 'Tokyo',
    timeDif: 9,
  },
  {
    cityName: 'Brisbane',
    timeDif: 10,
  },
  {
    cityName: 'Port-Vila',
    timeDif: 11,
  },
  {
    cityName: 'Auckland',
    timeDif: 12,
  },
 
];

class ClockComponent<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;
  date: Date;
  hourDiff: number;
  city: string;
  constructor(
    templateId: string,
    hostElementId: string,
    date: Date,
    hourDiff: number,
    city: string
  ) {
    this.date = date;
    this.hourDiff = hourDiff;
    this.city = city;
    this.templateElement = <HTMLTemplateElement>(
      document.getElementById(templateId)!
    );

    this.hostElement = <T>document.getElementById(hostElementId)!;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    this.element = <U>importedNode.firstElementChild;

    this.attach();
    this.render();
  }

  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }

  update(date: Date) {
    this.date = date;
    this.render();
  }

  render() {
    // get UTC time
    const minuteOffsetToUTC = this.date.getTimezoneOffset();
    const auxHours = this.date.getHours() + minuteOffsetToUTC / 60;

    const utcHours = ((auxHours + 11) % 12) + 1;
     

    const hours = utcHours + this.hourDiff;
    const minutes = this.date.getMinutes();
    const seconds = this.date.getSeconds();

    const hour = hours * 30;
    const minute = minutes * 6;
    const second = seconds * 6;

    const hourElement = <HTMLDivElement>this.element.querySelector('.hour')!;
    const minuteElement = <HTMLDivElement>(
      this.element.querySelector('.minute')!
    );
    const seconsElement = <HTMLDivElement>(
      this.element.querySelector('.second')!
    );

    const cityTitle = this.element.querySelector('h3')!;
    cityTitle.textContent = this.city;

    hourElement.style.transform = `rotate(${hour}deg)`;
    minuteElement.style.transform = `rotate(${minute}deg)`;
    seconsElement.style.transform = `rotate(${second}deg)`;
  }
}

const clockOnPage: Array<any> = [];

arrayOfClockShows.forEach((clock) => {
 
  const element = new ClockComponent('clock-template', 'container', new Date(), clock.timeDif, clock.cityName);
  clockOnPage.push(element);  
});


setInterval(function () {
    clockOnPage.forEach(clock => {
        clock.update(new Date())
    })
  }, 1000);


