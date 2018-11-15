export const fetchEvent = slug =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: '323350d8-3cd3-4625-a7b6-0740aab33ba1',
        slug: 'modern-monday',
        date: '2018-11-12',
        rounds: [
          {
            number: 1,
            startTime: '2018-11-15T09:46:56.899Z',
            endTime: '2018-11-15T09:46:56.899Z',
            matches: [
              {
                table: 1,
                person: {
                  dci: '1030220331',
                  firstName: 'Jozo',
                  middleName: '',
                  lastName: 'Jozic',
                },
                opponent: {
                  dci: '1030220332',
                  firstName: 'Bozo',
                  middleName: '',
                  lastName: 'Bozic',
                },
                outcome: 1,
                win: 2,
                loss: 1,
                draw: 0,
              },
              {
                table: 2,
                person: {
                  dci: '1030220333',
                  firstName: 'Lozo',
                  middleName: '',
                  lastName: 'Lozic',
                },
                opponent: {
                  dci: '1030220334',
                  firstName: 'Hozo',
                  middleName: '',
                  lastName: 'Hozic',
                },
                outcome: 1,
                win: 2,
                loss: 1,
                draw: 0,
              },
            ],
          },
        ],
      })
    }, 1500)
  })
