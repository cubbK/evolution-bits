using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BlobController : MonoBehaviour
{

    public float speed= 1f;
    public float searchRadius = 1f;
    public int reproductionRate = 10;

    private Vector2 _direction = new Vector2(0.0f, 1.0f);
    public Vector2 direction
    {
        get => Vector2.ClampMagnitude(_direction, 1);
        set => _direction = value;
    }
    // IsometricCharacterRenderer isoRenderer;

    Rigidbody2D rbody;
    int rotation = 0;

    void OnTriggerEnter2D(Collider2D other)
    {
        ChangeDirectionRandom();

    }

    public void ChangeDirectionRandom()
    {
        float randomX;
        if(_direction.x > 0)
        {
            randomX = Random.Range(-1.0f, -0.1f);
        } else
        {
            randomX = Random.Range(0.1f, 1.0f);
        }
        float randomY;
        if (_direction.y > 0)
        {
            randomY = Random.Range(-1.0f, -0.1f);
        }
        else
        {
            randomY = Random.Range(0.1f, 1.0f);
        }

        int whichOneToAbsolute = Random.Range(0, 2);
        if(whichOneToAbsolute == 0)
        {
            if(randomX < 0)
            {
                randomX = -1f;
            } else
            {
                randomX = 1f;
            }
        } else
        {
            if (randomY < 0)
            {
                randomY = -1f;
            }
            else
            {
                randomY = 1f;
            }
        }

        _direction = new Vector2(randomX, randomY);
        Debug.Log(_direction);
    }

    private void Awake()
    {
        rbody = GetComponent<Rigidbody2D>();
        //isoRenderer = GetComponentInChildren<IsometricCharacterRenderer>();
    }


    // Update is called once per frame
    void FixedUpdate()
    {
        Vector2 currentPos = rbody.position;
        
        Vector2 movement = direction * speed;
        Vector2 newPos = currentPos + movement * Time.fixedDeltaTime;
        //isoRenderer.SetDirection(movement);
        rbody.MovePosition(newPos);
    }
}

